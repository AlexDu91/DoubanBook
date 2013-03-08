$(function(){
    var c = function(e) {
      return console.log(e);
    };

    function getBook() {
    	var url = 'https://api.douban.com/v2/book/user/axedo/collections';
		$.ajax({
		    url: url,
		    dataType: 'jsonp',
		    success: function(data) {
		    	var books = data.collections;
		    	$(books).each(function(index,value) {
		    		var book_href = value.book.alt,
		    		    book_author = value.book.author,
		    		    book_img_medium = value.book.images.medium,
		    		    book_img_large = value.book.images.large,
		    		    book_title = value.book.title,
		    		    book_updated = value.updated,
		    		    book_comment = value.comment;
                    $("<section/>").addClass("book").addClass("book" + index).appendTo("#content");
		    		$("<h3/>").html(book_title).appendTo($(".book" + index));
		    		$("<img>").addClass("img").attr({src:book_img_large}).wrap($("<a/>").attr({href:book_href})).parent().appendTo($(".book" + index));
		    		$("<div>").addClass("side").addClass("side" + index).appendTo($(".book" + index));
		    		$("<p>").addClass("author").html("作者：" + book_author).appendTo($(".side" + index));
		    		$("<p>").addClass("updated").html("更新时间：" + book_updated).appendTo($(".side" + index));
		    		if (book_comment != undefined) {
		    			$("<p>").addClass("comment").html("简评：" + book_comment).appendTo($(".side" + index));
		    		};
		    		$(".side" + index).appendTo($(".book" + index));
		    	})
	        }
	    });
    };

    getBook();

})
