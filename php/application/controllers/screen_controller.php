<?php

class Screen_Controller extends Controller {


	
	
	function Screen_controller()
	{
		parent::Controller();
			
	}
	
	function index()
	{

		$this->load->view('site/header_view');
		$this->load->view('site/home_view');	
			
	}//end function index
	
	function learn(){
		$data = array ( 'experiment' => "", 
						'imaging' => "Since 2001, Stratton Imaging has been a visionary print provider offering clients custom, unique solutions to their graphic needs.

Using state-of-the-art technology, cutting edge materials, and superior craftsmenship, Stratton delivers the job right everytime. Basically, we provide hands on graphic management from conception to completion to insure your projectÕs success."	
					);
		$this->load->view('xml/learn', $data);
		
	}//end function
	function craft(){					//	Service name		// number of images
		$data = array (	'services'=> array(	'Grand Format' 				=> '6', 
											'Custom Cut Vinyl'		 	=> '4', 
											'Event Signage' 			=> '5', 
											'Graphics In Motion' 		=> '5', 
											'Comprehensive Capabilities'=> '6', 
											'Studio' 					=> '1', 
											'Offset Printing' 			=> '4', 
											'Retail Displays' 			=> '6', 
											'Theatrical Backdrops' 		=> '5',
											'Graphics on Anything' 		=> '2'
										),
						'imagesPath'	=> "site/craft/",
						'filename'		=> "1.jpg"	
					);
		$this->load->view('xml/craft', $data);
	}//end function
	
	function credits(){
		$data = array();
		
	}//end function
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++
	//----------------UTILITY FUNCTIONS--------------------
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	function _readDirectory($filepath) {
		$path = '/img/site/craft/' . $filepath . '/';

		$dir = opendir($path);

		$results = array();		
		while($file = readdir($dir)) {
			if (($file != '.' && $file != '..') && filetype($path . $file) == 'dir') $results[] = $file;
		}
	
		closedir($dir);
		return $results;
	}

}//end class

