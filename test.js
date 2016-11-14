// 3. Select the script by ID, and with .html return the inner HTML
var source = $('#store-template').html();

// 4. compile our template to js html using handlebars
var template = Handlebars.compile(source);

// 5. Fill our template (the compiled code) 
var newHTML = template({item: "bread", price: "15"});

// 6. Append our compiled html to the page
$('.items').append(newHTML);