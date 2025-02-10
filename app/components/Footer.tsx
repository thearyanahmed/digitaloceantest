import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Typography from './UI/Typography';

// Define the Footer component
export default function Footer() {
  return (
    <footer className="sm:flex flex-col">
        <div className="xl:flex xl:flex-row">
        <div className="invisible xl:visible xl:basis-2/12 basis-0/12 shadow-l border-r bg-sideskirts"></div>
                        <div className="md:basis-10/12 xl:basis-12/12">
                            <Typography variant="header3" color="secondary"><b>Bedrijfsgegevens</b></Typography><br />
                            <Typography variant="smaller" color="secondary">Creative Peppers</Typography>
                            <Typography variant="smaller" color="secondary">Schumansingel 34</Typography>
                            <Typography variant="smaller" color="secondary">6716KE Ede</Typography><br />
                            <Typography variant="smaller" color="secondary">KVK nummer: 76310191</Typography>
                            <Typography variant="smaller" color="secondary">Zegjamet is een handelsnaam van Creative Peppers</Typography>
                        </div>

                       </div>
                  <div className="invisible xl:visible xl:basis-2/12 basis-0/12 shadow-r border-l bg-sideskirts"></div>
        
s       
       
    </footer>
  );
}