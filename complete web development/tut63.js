const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World , Tanya');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Layout Using Grid Template</title>
      <style>
         .container{
             display: grid;
             grid-gap: 1rem;
             grid-template-areas:
             'navbar navbar navbar navbar'
             'section section section aside' 
             'footer footer footer footer';
  
         }
         .item{
             background-color: darkmagenta;
             border: 2px solid black;
             padding: 12px 12px;
         }
  
         #navbar{
             grid-area: navbar;
         }
         #section{
             grid-area: section;
         }
         #aside{
             grid-area: aside;
         }
         #footer{
             grid-area: footer;
         }
         
      </style>
  </head>
  <body>
      <div class="container">
          <div id="navbar" class="item">Home Aboutus Contact US</div>
          <div id="section" class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Mollitia nisi vitae soluta ipsum, quibusdam totam explicabo repudiandae, asperiores perspiciatis est voluptatum sint, rem exercitationem nemo facere veniam natus reiciendis? Itaque?</div>
              <div id="aside" class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a suscipit veniam quasi dolore dignissimos unde libero, numquam cumque minima consequatur non voluptatum sequi nulla enim laborum ipsam, voluptate aspernatur, qui ipsa aperiam illum deleniti debitis. Sed laboriosam iste earum!</div>
              <div id="footer" class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia ad itaque esse explicabo cumque, perferendis voluptates quidem autem. Recusandae, molestiae placeat. Recusandae impedit molestiae laudantium corporis id voluptatem, aliquam perspiciatis totam itaque odit rerum numquam ratione debitis animi explicabo?</div>
     
          </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});