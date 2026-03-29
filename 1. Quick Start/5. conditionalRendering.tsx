function AdminPanel {
  return
}

function LoginForm {
  return
}

let isLoggedIn;


//Way 1
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;

{
//Way 2
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
}

{
//Way 3
<div>
  {isLoggedIn && <AdminPanel />}
</div>
}