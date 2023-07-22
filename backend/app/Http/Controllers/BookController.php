<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;

use App\Models\ReplyTo;
use App\Models\Comment;

class BookController extends Controller
{
    public function setBookInfo(Book $book){
        $book->rated=$book->ratings->count();
        $book->rating=$book->ratings->avg('rating');
        $book->liked=$book->ratings->where('like',1)->count();
        $book->disliked=$book->ratings->where('like',-1)->count();

        $nestedRelationships = [
            'author',
        ];

        // Call the recursive function to add more levels of nesting
        $this->addNestedRelationships($nestedRelationships, 'replyTos.comment.author', 5); // Change 3 to the desired nesting level



        $comments = Comment::with(['author','replyTos.comment.author','replyTos.comment.replyTos.comment.author'])->whereNotIn('id', function ($query) {
            $query->select('response_id')->from('reply_tos');
        })->get();

        // Retrieve the replyTos recursively for each top-level comment
        foreach ($comments as $comment) {
            $comment->replyComment = $this->getReplyCommentTree($comment);
        }
        $book->commentsWithReply=$comments;
    }

    private function getReplyCommentTree($comment)
    {
        // $comment->author();
        // Fetch the replyTos for the given comment
        $comments = $comment->replyTos->map(function($replyTo){
            return $replyTo->comment;
        });

        // Retrieve the replyTos recursively for each reply
        foreach ($comments as $comment) {
            $comment->replyComment = $this->getReplyCommentTree($comment);
        }

        return $comments;
    }

    private function addNestedRelationships(array &$relationships, $relationshipName, $depth)
{
    if ($depth <= 0) {
        return;
    }

    $relationships[] = $relationshipName;

    // Recursive call to add nested relationships
    $this->addNestedRelationships($relationships, 'replyTos.comment.'.$relationshipName, $depth - 1);
}

    public function index()
    {

        $books=Book::where('accepted',1)->with('author')->with('ratings')->with('comments.replyTos')->with('comments.author')->get();
        foreach($books as $book){
            self::setBookInfo($book);
        }
        return $books;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBookRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookRequest $request)
    {
        $file= $request->file('file');
        $fn = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $file_name = time() .'_'. $file->getClientOriginalName();
        $image_name = $fn.'.png';
        $filePath = $file->storeAs('public/files/books', $file_name);
        $imagePath="public/images/books/".$image_name;

        $im = new \Imagick();
        $im->readImage(storage_path("app/".$filePath)."[0]");
        $im->setImageFormat('png');
        $im->writeImages(storage_path("app/".$imagePath), true);

        $book = Book::create([
            'user_id' => $request->user_id,
            'domain' => $request->domain,
            'faculty' => $request->faculty,
            'type' => $request->type,
            'file' => $filePath,
            'image' => $imagePath,
            'filename' => $fn,
        ]);

        // $book->save();

        return response()->json(['message' => 'Book created successfully!', 'book' => $book], 201);

    }




    public function show($book)
    {
    
        $book=Book::where('accepted',1)->with('author')->with('ratings')->with('comments.replyTos')->with('comments.author')->find($book);
        self::setBookInfo($book);
        return $book;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBookRequest  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }
}
