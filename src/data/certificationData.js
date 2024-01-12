import React from 'react'
import { v4 as uuidv4 } from "uuid";
import wordpressImage from '../assets/certifications/wordpress.jpg';
import zuittImage from '../assets/certifications/zuitt.jpg';
import bayanAcademyImage from '../assets/certifications/bayan.jpg';
import gdscMembershipImage from '../assets/certifications/membershipGdsc.jpg';
import gdscInnoverseImage from '../assets/certifications/gdsc.jpg';
function certificationData() {
  const certificates=[{
    id: uuidv4(),
    certificationImage:wordpressImage,
    certificationName:"Wordpress Certification of Completion"
  },
  {
    id: uuidv4(),
    certificationImage:zuittImage,
    certificationName:"Zuitt Certification of Participation"
  },
  {
    id: uuidv4(),
    certificationImage:gdscMembershipImage,
    certificationName:"GDSC Certificate of Membership"
  },
  {
    id: uuidv4(),
    certificationImage:gdscInnoverseImage,
    certificationName:"GDSC Certification of Participation"
  },
  {
    id: uuidv4(),
    certificationImage:bayanAcademyImage,
    certificationName:"Bayan Certification of Completion"
  }
]
  return certificates;
}

export default certificationData