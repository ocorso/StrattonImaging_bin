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

        $success 	= (isset($result[0]['id'])) 				? 	'yes': 'no';
      	$iDir		= (isset($result[0]['initial_directory'])) 	?	$result[0]['initial_directory'] : "";
        $r 			= array('success'=>$success, 'initial_directory' => $iDir);
       
		return $r;
    }//end function get_login
    
}//end class

?>