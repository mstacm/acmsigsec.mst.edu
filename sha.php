<html>
<head>
	<title>level1</title>
    <link rel='stylesheet' href='style.css' type='text/css'>
</head>
<body>
<?php
if (isset($_GET['name']) and isset($_GET['password'])) {
    $name = (string)$_GET['name'];
    $password = (string)$_GET['password'];

    if ($name == $password) {
        print 'Your password can not be your name.';
        print var_dump($password);
        print var_dump($name);
    } else if (sha1($name) === sha1($password)) {
        print 'flag';
        print var_dump($password);
        print var_dump($name);
    } else {
        print '<p class="alert">Invalid password.</p>';
        print var_dump($password);
        print var_dump($name);
    }
}
?>
<section class="login">
	<div class="title">
		<a href="./index.txt">Level 1</a>
	</div>

	<form method="get">
		<input type="text" required name="name" placeholder="Name"/><br/>
		<input type="text" required name="password" placeholder="Password" /><br/>
		<input type="submit"/>
	</form>
</section>
</body>
</html>
