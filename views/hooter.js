content:
<% if(req.user)  { %>
<nav>
<button style="color:white;background-color:pink;"> <img src="<%=avatar%>" style="border-radius:50px;"> <b> <%=req.user.username%> </b> </button>
<button style="color:white;background-color:pink;"> <b> Log out</b> </button>
</nav>
<% } else { %> 
<nav>
<a href="https://discord.com/oauth2/authorize?client_id=<%=bot_info.id%>&scope=bot+applications.commands&permissions=8"> <button style="color:white;background-color:pink;"> <b>invite</b> </button> </a>
</nav>
<% } %>
      
