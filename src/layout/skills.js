import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

import InfoSkills from '../data/infoSkills';

import '../assets/css/skills.css';


export default function Skills() {

    function getInfoSkills() {
        return InfoSkills.map(skillInfo => {
            return <Accordion.Item key={skillInfo.id} className='AccordItem' eventKey={skillInfo.id}>
                <Accordion.Header className='AccordHeader'>{skillInfo.skillHeader}</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={2}>
                        <div className='barrasSkills'>
                            <p>{skillInfo.tecnologia1}<p>{skillInfo.prgresso1}%</p></p>
                            <ProgressBar className='barras' animated now={skillInfo.prgresso1} />
                        </div>
                        <div className='barrasSkills'>
                            <p>{skillInfo.tecnologia2}<p>{skillInfo.prgresso2}%</p></p>
                            <ProgressBar className='barras' animated now={skillInfo.prgresso2} />
                        </div>
                        <div className='barrasSkills'>
                            <p>{skillInfo.tecnologia3}<p>{skillInfo.prgresso3}%</p></p>
                            <ProgressBar className='barras' animated now={skillInfo.prgresso3} />
                        </div>
                        <div className='barrasSkills'>
                            <p>{skillInfo.tecnologia4}<p>{skillInfo.prgresso4}%</p></p>
                            <ProgressBar className='barras' animated now={skillInfo.prgresso2} />
                        </div>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            
        })
    }


    return (
         <Accordion>
{getInfoSkills()}

         </Accordion>
        
    );
}
