import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { motion } from "framer-motion";
import person from '../../../assets/manager_man.jpg';


const TeamMember = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: 'white' }}>
      <TeamMemberCard
        name="Tuan Haji Tajurudin Mat Noh"
        title="Chairman"
        degree="B. Eng(Hons) Electrical Engineering, Universiti Teknologi Malaysia (UTM)"
        experience="40+ years in M&E, worked with Malayawata Steel, UEM, Renong"
        strengths="Business operations, project execution"
        memberships="BEM, IEM, IEEE(USA)"
        image={person}
      />
      <TeamMemberCard
        name="M Khairul Fadhli Ramli"
        title="Managing Director"
        degree="B. Eng(Hons) Mechanical Engineering, UNITEN"
        experience="Former GM at Uni10 Energy, project manager for government projects (MOSTI,MOE)"
        strengths ="R&D, renewable energy, business development"
        memberships="BEM, IEM"
        image={person}
      />
      <TeamMemberCard
        name="Tuan Haji Zulkafli Abdullah"
        title="Executive Director/ Acting Finance Director"
        degree="B. Eng(Hons) Civil Engineering UTM"
        experience="Over 30 years in UEM, Magna Prima Berhad, involved in major projects like PLUS"
        strengths ="Constructions management, property development"
        memberships="BEM" 
        image={person}
      />
       <TeamMemberCard
        name="Ir. Zailani Johari"
        title="Technical Director/ Competent Electrical Engineer"
        degree="BSc. Electrical Engineering, University of New Haven, USA"
        experience="30+ years in M&E, registered Competent Engineer (11kV)"
        strengths =""
        memberships="BEM, IEM, Energy Commission" 
        image={person}
      />
         <TeamMemberCard
        name="Syahir M Abdullah"
        title="Project Manager (M&E)"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
      <TeamMemberCard
        name="M Khairi M Dharus"
        title="Project Manager (C&S)"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
        <TeamMemberCard
        name="Abd Rashied"
        title="Project Executive (Chargeman A4/ Wireman PW4)"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
        <TeamMemberCard
        name="Ahmad Faiz"
        title="Project Executive (Chargeman A4/ Wireman PW4"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
        <TeamMemberCard
        name="Nurafiesya"
        title="Account Executive"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
        <TeamMemberCard
        name="Husna"
        title="Human Resource Executive"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
        <TeamMemberCard
        name="Sarinah"
        title="Admin Executive"
        degree=""
        experience=""
        strengths =""
        memberships="" 
        image={person}
      />
    </motion.div>
  );
};

export default TeamMember;
