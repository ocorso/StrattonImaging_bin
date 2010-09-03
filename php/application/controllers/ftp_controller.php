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
	
	function upload(){
		
		$MAXIMUM_FILESIZE = 1024 * 1024 * 200; // 200MB
		$MAXIMUM_FILE_COUNT = 10; // keep maximum 10 files on server
		echo exif_imagetype($_FILES['Filedata']);
		if ($_FILES['Filedata']['size'] <= $MAXIMUM_FILESIZE)
		{
		    move_uploaded_file($_FILES['Filedata']['tmp_name'], "./temporary/".$_FILES['Filedata']['name']);
		    $type = exif_imagetype("./temporary/".$_FILES['Filedata']['name']);
		    if ($type == 1 || $type == 2 || $type == 3)
		    {
		        rename("./temporary/".$_FILES['Filedata']['name'], "./images/".$_FILES['Filedata']['name']);
		    }
		    else
		    {
		        unlink("./temporary/".$_FILES['Filedata']['name']);
		    }
		}
		$directory = opendir('./images/');
		$files = array();
		while ($file = readdir($directory))
		{
		    array_push($files, array('./images/'.$file, filectime('./images/'.$file)));
		}
		usort($files, sorter);
		if (count($files) > $MAXIMUM_FILE_COUNT)
		{
		    $files_to_delete = array_splice($files, 0, count($files) - $MAXIMUM_FILE_COUNT);
		    for ($i = 0; $i < count($files_to_delete); $i++)
		    {
		        unlink($files_to_delete[$i][0]);
		    }
		}
		print_r($files);
		closedir($directory);
		
		function sorter($a, $b)
		{
		    if ($a[1] == $b[1])
		    {
		        return 0;
		    }
		    else
		    {
		        return ($a[1] < $b[1]) ? -1 : 1;
		    }
		}

	
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