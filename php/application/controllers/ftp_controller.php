<?php

class Ftp_controller extends Controller {

	var $_helpers = array(
		'url',
		'asset'
	);
	
	var $basePath = "/htdocs/ftpuser/";
	
	function Ftp_controller()
	{
		parent::Controller();
		
		$this->load->library('ftp');
		//$this->output->enable_profiler(TRUE);

	}//end function
	
	function login(){
	
		$this->load->model('Ftp_Model');
	
		$data['response'] = $this->Ftp_Model->checkLogin($this->input->post('username'), $this->input->post('password'));
		$this->load->view('ftp/login_response', $data);
				
	}//end function	
	
	function get_list($initialPath) {
		//toDO: have flash send the path as a post variable
		//if($$this->input->path) $basePath = $$this->input->path;
		
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
		
		//uncomment this for deploy
		//$config['hostname'] = 'localhost';
		
		//uncomment this for production
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'codeigniter';
		$config['password'] = 'h@ckp40F';
		$config['debug'] = TRUE;
		
		$this->ftp->connect($config);	
	}//end function
	
}//end class


?>