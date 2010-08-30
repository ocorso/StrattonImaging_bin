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
		$this->_openConnection();
		
		$list = $this->ftp->list_files($currentPath);

/*
   return array(		'folders' =>$folders,
        				'links'=>$links,
        				'files'=>$files
        			);
*/
		
		$files = array();
		
		foreach($list['folders'] as $item)
			$files[] =	array ("Name"=>$item['name'], "Date"=>$item['time'], "Size"=>$item['size'], "Type"=>"folder");			
		foreach($list['files'] as $item)
			$files[] =	array ("Name"=>$item['name'], "Date"=>$item['time'], "Size"=>$item['size'], "Type"=>"file");	
			
		$data = array(
			'files' => json_encode($files)
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