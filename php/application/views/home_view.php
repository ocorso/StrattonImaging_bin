<html>
<head>
<title>Welcome to Owen's FPO Site</title>

<script type="text/javascript">
	var baseUrl = "<?= $this->config->item('base_url'); ?>";
</script>

<?= asset('css','css/main.css'); ?>
<?= asset('js','js/jquery.js'); ?>
<?= asset('js','js/swfobject.js'); ?>
<?= asset('js','js/swfaddress.js'); ?>
<?= asset('js','js/site/init.js'); ?>


</head>
<body>
<div id="wholepage">
	<div id="content">
		<div id = "site">
			<div id="center">
				<div id= "noflash">
					<h1>Welcome to Owen's FPO Site</h1>
					
					<p>I have loaded some helpers, created a site model, and modified the .htaccess file</p>
					<br/>
					<p>As you can tell, i'm quite a talented designer and typographer. I have exquisite taste in colors and page layout.</p>
					<p>If you would like to edit this page you'll find it located at:</p>
					<code>php/application/views/home_view.php</code>
					
					<p>The corresponding controller for this page is found at:</p>
					<code>php/application/controllers/home.php</code>
					
					<p>If you are exploring CodeIgniter for the very first time, you should start by reading the <a href="user_guide/">User Guide</a>.</p>
					
					<p><br />Page rendered in {elapsed_time} seconds</p>
				
				</div>

			
			</div>
		
		</div>
	
	</div>

</div>
</body>
</html>