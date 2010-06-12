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
		$data = array ( 'experiment' => "Perceptual adaptation is where our brain adapts to the perception that it receives. The world that we perceive is processed via our brain. Our brain plays a crucial role in how our vision works. If our vision is altered slightly, our brain accounts for the difference and will allow us to perceive the world as “normal.” For example, if you are fitted for glasses that distort the image the subject sees by forty five degrees, then over time, the brain perceives the acute difference as normal. George Stratton, a psychologist, was intrigued by the idea of perceptual adaptation. Because our retina receives images upside down, he was intrigued to see what happens when the brain receives an image that is right side up. Stratton conducted experiments in the 1890s, in which he tested the theory of perceptual adaptation. He wore a reversing telescope for an extended period of time.  By day four, things were upright (not inverted), and on day five things appeared normal until he concentrated on them; then they became inverted again. In Conclusion, perceptual adaptation is an element that has been researched extensively by George Stratton. All of his experiments prove the theory of perceptual adaptation to be true. Perceptual adaptation is a theory that proves the notion that our brain and senses collaborate. Our vision can be altered, but our brain corrects this alteration to seem correct. Our brain allows us to live a normal life with an altered perception of a normal life", 
						'imaging' => "Since 2001, Stratton Imaging has been a visionary print provider offering clients custom, unique solutions to their graphic needs.

Using state-of-the-art technology, environmentally-safe materials, and superior craftsmenship, Stratton delivers the job right everytime. Basically, we provide hands on graphic management from conception to completion to insure your project�s success."	
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
						'imagesPath'	=> "site/craft/"
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

