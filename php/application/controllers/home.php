<?php

class Home extends Controller {


	
	
	function Home()
	{
		parent::Controller();
			
	}
	
	function index()
	{
		
		/*$data = array();
		$data['isMobile'] = $this->agent->is_mobile();
		$data['baseUrl'] = $this->SiteModel->getBaseUrl();
		$data['xml'] = $this->SiteModel->getXML();*/
		$this->load->library('ftp');
		$this->load->view('header');
		$this->load->view('home_view');	
		/* $this->load->view('footer'); */
		
		
		//here is some ftp stuff
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'ocorso%02a11c5';
		$config['password'] = 'Vamp5near';
		$config['debug'] = TRUE;
		
		$this->ftp->connect($config);
		$basePath = "/htdocs/ftpuser/";
		$list = $this->ftp->list_files($basePath);
		
		foreach($list as $file){
			$filename =  $file;
			$name = explode($basePath, $filename);
			
			$size = $this->ftp->getSize($filename);
			$date = $this->ftp->getModDate($filename);
			
			echo "<br/>filename: ".$name[1]." Size: ".$size." kb;   date modified: ".$date;

		}
		
				$this->ftp->close(); 
	}
}

/* End of file home.php */
/* Location: ./php/application/controllers/home.php */