<?php

class Xml_Controller extends Controller {


	
	
	function Xml_Controller()
	{
		parent::Controller();
			
	}
	
	function index()
	{

		$this->load->view('site/header_view');
		$this->load->view('site/home_view');	
			
	}//end function index
	
	function craft(){
		$data = array (	'services'=> array(	'Grand Format', 
											'Custom Cut Vinyl', 
											'Event Signage', 
											'Graphics In Motion', 
											'Comprehensive Capabilities', 
											'Studio', 
											'Offset Printing', 
											'Specialty Retail Displays', 
											'Theatrical Backdrops',
											'Graphics on Anything'
										),
						'images'=> "/img/site/craft/1.jpg"		
					);
		$this->load->view('xml/craft', $data);
	}//end function
}//end class

