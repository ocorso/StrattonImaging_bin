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
		$data = array ( 'sections'=>	array (
												array(
													'id'		=> 'se',	
													'label' 	=> 'The Stratton Experiment',
													'content' 	=> "Perceptual adaptation is where our brain adjusts sensory input received from the world and creates what we perceive as reality.  A prolific American psychologist the late 1800's, George Stratton, performed experiments testing the theories of perceptual adaptation. 
Because our retina receives images upside down, he was intrigued to see what happens when the brain receives an image that is right side up. 

During the experiments, Mr. Stratton wore a reversing telescope for an extended period of time.  By day four, things were upright (not inverted), and on day five things appeared normal until he concentrated on them; then they became inverted again.  The result of these studies prove the theory of perceptual adaptation to be true.  Our vision can be altered, but our brain corrects this alteration to seem correct."), 
												array ( 
													'id'		=> 'si',	
													'label'		=> 'Stratton Imaging',
													'content'	=> "Since 2001, Stratton Imaging has been a visionary print provider offering clients custom, unique solutions to their graphic needs.  Specializing in high-end, quality print deliverables, we take pride in our craft.
													
Building on George Stratton's idea that one can adapt their perception to fit a changing world, Stratton Imaging strives to bring all of their client's dreams into reality.  In addition, by adopting this adaptive attitude, we begin to see not only in black and white but in a myriad of colors complete with the richness of full spectrum of experience.  

Using state-of-the-art technology, environmentally-safe materials, and superior craftsmanship, Stratton delivers the job right every time. Basically, we provide hands on graphic management from conception to completion to insure your project's success.")
											)
					);
		$this->load->view('xml/learn', $data);
		
	}//end function
	function craft(){		
		$craftDir	 	= 'img/site/craft/';
		$servicesArr	= scandir($craftDir);
		$tmpdata		= array();
		
		foreach($servicesArr as $service){
			if ($service != '.' && $service != '..'){
				$name 	= ucwords(str_replace("_", " ", $service));
				$len	= count(scandir($craftDir.$service))-2;//minus 2 for noise!
				array_push($tmpdata, array($name, $service, $len));
				
			}//end if not noise		
		}//end foreach
										//$tmpData = [0] Service name	[1] directory name  [2] number of images
		$data = array (	'services'		=> $tmpdata,
						'imagesPath'	=> str_replace("img/", "", $craftDir)
					);
		$this->load->view('xml/craft', $data);
	}//end function
	
	function credits(){
		$data = array(	"credits"=> array(		
									array('id'=>"taking_pelham", 'title'=> "The Taking of Pelham 123", 'filename'=>"top.jpg"),
									array('id'=>"rum_diary", 'title' => "The Rum Diary", 'filename'=>"rd.jpg"),
									array('id'=>"unusuals", 'title' => "The Unusuals", 'filename'=>"u.jpg"),
									array('id'=>"sorcerers_apprentice", 'title' => "The Sorcerers Apprentice", 'filename'=>"sa.jpg"),
									array('id'=>"morning_glory", 'title' => "Morning Glory", 'filename'=>"mg.jpg"),
									array('id'=>"everybodys_fine", 'title' => "Everybodys Fine", 'filename'=>"ef.jpg"),
									array('id'=>"cupid", 'title' => "Cupid", 'filename'=>"c.jpg"),
									array('id'=>"royal_pains", 'title' => "Royal Pains", 'filename'=>"rp.jpg"),
									array('id'=>"other_guys", 'title' => "The Other Guys", 'filename'=>"tog.jpg"),
									array('id'=>"mp", 'title' => "Mildred Pierce", 'filename'=>"mp.jpg")
								),
						'imagesPath'	=> "site/credits/"
					);

		$this->load->view('xml/credits', $data);
		
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

