<?php

class Ftp_controller extends Controller {

	var $_helpers = array(
		'url',
		'asset'
	);
	
	var $basePath = "/";
	
	function Ftp_controller()
	{
		parent::Controller();
		
		$this->load->library('ftp');
		//$this->output->enable_profiler(TRUE);

	}//end function
	
	function login(){
		//take user creds
		//check login, 
		//verify login username and password returns a path
		//when it does, return name and email to display in flash
		
		//asychronously retrieve ftp directory. green/red indicator in view.
		
		$this->load->model('Ftp_Model');
		$d = $this->input->post('d');
		$jArr = json_decode(base64_decode($d), true);
		
		
		$d = base64_encode(json_encode($this->Ftp_Model->checkLogin($jArr['u'],$jArr['p'])));
		
		$data['response'] = $d;
		
		$this->load->view('ftp/login_response', $data);
				
	}//end function	
	
	function get_directory() {
		$d = $this->input->post('d');
		$jArr = json_decode(base64_decode($d), true);
		
		$currentPath = $jArr['p'];
print_r("here is the path: ".$currentPath."\n");
		
		//toDO: have flash send the path as a post variable
		//if($$this->input->path) $basePath = $$this->input->path;
		
		$this->_openConnection();
		
		$list = $this->ftp->list_files($this->basePath);
var_dump($list);
		
		$files = array();
		foreach($list as $item){
			//todo prep items for json conversion			
		}

		$data = array(
			'files' => $files
		);
		$this->ftp->close(); 
		$this->load->view('ftp/get_directory', $data);

	}//end function
	
	function _openConnection() {
			
		//here is some ftp stuff
		
		//uncomment this for deploy
		//$config['hostname'] = 'localhost';
		
		//uncomment this for production
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'codeigniter';
		$config['password'] = 'h@ckp40F';
		$config['debug'] = FALSE;
		
		$this->ftp->connect($config);	
	}//end function
	
}//end class


?>