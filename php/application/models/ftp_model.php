<?php 

class Ftp_Model extends Model {

    function Ftp_Model()
    {
        // Call the Model constructor
        parent::Model();
    }
    
    function checkLogin($usn, $pwd){
    
   		$this->load->database();
    	$this->db->from('Users');
    	$this->db->where('username', $usn);
    	$this->db->where('password', $pwd);
        $query 		= $this->db->get();
        $result 	= $query->result_array();

        $success 	= (isset($result[0]['id'])) 				? 	'yep': 'nope';
      	$initialDir	= (isset($result[0]['initial_directory'])) 	?	$result[0]['initial_directory'] : "";
        $email		= (isset($result[0]['email']))				?	$result[0]['email'] : "";
        $name		= (isset($result[0]['name']))				?	$result[0]['name'] : "";
        $r 			= array('s' => $success, 
        					'p' => $initialDir,
        					'n' => $name, 
        					'e' => $email
        				);
        
       
		return $r;
    }//end function get_login
    
}//end class

?>