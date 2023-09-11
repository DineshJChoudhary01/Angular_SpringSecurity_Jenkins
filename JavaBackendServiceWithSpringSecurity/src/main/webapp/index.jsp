<%--
<%@ page import = "java.io.*,java.util.*" %>

<html>
   <head>
      <title>Page Redirection</title>
   </head>

   <body>
      <center>
         <h1>Page Redirection</h1>
      </center>
      <%
         // New location to be redirected
         String site = new String("http://localhost:4200");
        response.setStatus(response.SC_MOVED_TEMPORARILY);
         response.setHeader("Access-Control-Allow-Origin", "*");
         response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
         response.setHeader("Access-Control-Allow-Headers", "*");
         response.setHeader("Location", site);
      %>
   </body>
</html>

 --%>
 <html>
    <head>
       <title>Page Redirection</title>
    </head>

    <body>
    <div>Hello</>
    </body>
 </html>