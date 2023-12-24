$('#search-text').on('keydown', keydown);

function keydown(event) {
    if (event.which == 13) {
        event.preventDefault();
        $search_text = $('#search-text').val();
        if ($search_text) {
            fetch(`https://api.github.com/users/${$search_text}`)
            .then(item=>{
                return item.json();
            }).then(item=>{
                setInfoToHtml(item);
            });
        }
    }

}

function setInfoToHtml(object) {
   $('#avatar').attr("src", object.avatar_url);
   $('#name').text( object.name);
   $('#login').text( object.login);
   $('#gurl').text( object.url);
   let text = object.blog;
   if(!text) text = "No Blog";
   $('#blog').text(text);
   text = object.location;
   if(!text) text = "No Location";
   $('#location').text( text);
   text = object.email;
   if(!text) text = "No Email";
   $('#email').text( text);
   $('#followers').text( object.followers);
   $('#following').text( object.following);

}