<?php

class FtpController extends Controller {

	var $_helpers = array(
		'url',
		'asset'
	);
	
	var $basePath = "/htdocs/ftpuser/";
	function FtpController()
	{
		parent::Controller();
		
		$this->load->library('ftp');
		
		//$this->output->enable_profiler(TRUE);
	}//end function
		
	function get_list() {
		$this->_openConnection();
		
		$list = $this->ftp->list_files($this->basePath);
		$i = 0;
		$files = array();
		foreach($list as $file){
			$filename =  $file;
			$name = explode($this->basePath, $filename);
			
			$size = $this->ftp->getSize($filename);
			$date = $this->ftp->getModDate($filename);
			
			$files[$i] = array(	'name'			=> $name[1], 
								'size'			=>$size, 
								'date_modified'	=>$date
								
			);
			$i++;
		}

		$data = array(
			'files' => $files
		);
		$this->ftp->close(); 
		$this->load->view('ftp/get_list_view', $data);

	}//end function
	
	function _openConnection() {
			
		//here is some ftp stuff
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'ocorso%02a11c5';
		$config['password'] = 'Vamp5near';
		$config['debug'] = TRUE;
		
		$this->ftp->connect($config);
		
		
	}//end function
}//end class


?>