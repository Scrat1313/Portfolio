import { useRef, useEffect, useState } from 'react';
import logo from '../../assets/images/SecondaryLogo.png'; // Import du logo
import { RevealOnScroll } from '../commons';
// Import des icônes Material Design
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

const Footer = () => {
    const scrollingTextRef = useRef(null);
    const username = "Scrat";

    // État pour le formulaire de contact
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Animation du texte défilant avec vitesse réduite et plus fluide
    useEffect(() => {
        const scrollingText = scrollingTextRef.current;
        if (!scrollingText) return;

        const animateScroll = () => {
            if (scrollingText.scrollLeft >= scrollingText.scrollWidth / 2) {
                scrollingText.scrollLeft = 0;
            } else {
                scrollingText.scrollLeft += 0.5;
            }
            requestAnimationFrame(animateScroll);
        };

        const animation = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(animation);
    }, []);

    // Gestion du formulaire
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        }, 1000);
    };

    // Duplication du contenu pour une animation continue
    const scrollingContent = "Scrat • Designer • A.I. • Developer • DevOps • Alain Patrick • ";
    const repeatedContent = scrollingContent.repeat(10);

    // Structure de données pour les médias sociaux avec icônes Material
    const socialLinks = [
        { name: 'GitHub', icon: <GitHubIcon fontSize="medium" />, url: '#' },
        { name: 'Twitter', icon: <TwitterIcon fontSize="medium" />, url: '#' },
        { name: 'LinkedIn', icon: <LinkedInIcon fontSize="medium" />, url: '#' }
    ];

    return (
        <footer className="bg-[#0B0B0B] border-t border-[#5B21B6]/20 mt-auto w-full">
            {/* Texte défilant avec logo comme séparateur */}
            <div
                ref={scrollingTextRef}
                className="w-full overflow-hidden whitespace-nowrap py-12 bg-black border-y border-[#5B21B6]/10"
            >
                <div className="inline-block">
                    {repeatedContent.split('•').map((text, index) => (
                        <span key={index} className="inline-flex items-center">
                            <span className="text-[#DAA520] text-6xl md:text-7xl font-black px-6">{text.trim()}</span>
                            <span className="inline-flex items-center justify-center px-3">
                                {/* Utilisation du logo importé ici */}
                                <img src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
                    {/* Logo et info - Amélioré */}
                    <div className="lg:col-span-1">
                        <RevealOnScroll delay={100} direction="left">
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#DAA520] tracking-tight">
                                            {username}<span className="text-[#8B5CF6]">.</span>
                                        </h2>
                                        <p className="text-[#FFFFFF]/50 text-sm">Designer | Developer | DevOps</p>
                                    </div>
                                </div>
                                <p className="text-[#FFFFFF]/70 text-base mb-6 leading-relaxed">
                                    Elevating digital experiences with modern design solutions and innovative approaches that inspire and engage.
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <RevealOnScroll key={social.name} delay={150 + index * 100} direction="bottom">
                                            <a
                                                href={social.url}
                                                className="group relative p-3 rounded-xl bg-[#1B1B1B] border border-[#5B21B6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300"
                                                aria-label={social.name}
                                            >
                                                <span className="text-[#FFFFFF]/70 group-hover:text-[#8B5CF6] transition-colors duration-300">
                                                    {social.icon}
                                                </span>
                                            </a>
                                        </RevealOnScroll>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Contact amélioré */}
                    <div className="lg:col-span-1">
                        <RevealOnScroll delay={200} direction="bottom">
                            <h3 className="text-[#DAA520] text-xl font-semibold mb-6 flex items-center gap-2">
                                <LocationOnIcon fontSize="small" />
                                Contact Info
                            </h3>
                            <div className="space-y-5">
                                <RevealOnScroll delay={300} direction="bottom">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1B1B1B]/50 border border-[#5B21B6]/10">
                                        <span className="text-[#8B5CF6] mt-1 p-2 rounded-lg bg-[#8B5CF6]/10">
                                            <LocationOnIcon fontSize="small" />
                                        </span>
                                        <div>
                                            <p className="text-[#FFFFFF]/90 font-medium mb-1">Localization</p>
                                            <p className="text-[#FFFFFF]/60 text-sm">Fianarantsoa 301, Madagascar</p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                                <RevealOnScroll delay={400} direction="bottom">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1B1B1B]/50 border border-[#5B21B6]/10">
                                        <span className="text-[#8B5CF6] mt-1 p-2 rounded-lg bg-[#8B5CF6]/10">
                                            <EmailIcon fontSize="small" />
                                        </span>
                                        <div>
                                            <p className="text-[#FFFFFF]/90 font-medium mb-1">Email</p>
                                            <p className="text-[#FFFFFF]/60 text-sm break-all">
                                                patrickramahefarson08022002@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-2">
                        <RevealOnScroll delay={300} direction="right">
                            <h3 className="text-[#DAA520] text-xl font-semibold mb-6 flex items-center gap-2">
                                <MessageIcon fontSize="small" />
                                Send a message
                            </h3>
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <RevealOnScroll delay={400} direction="bottom">
                                        <div className="relative">
                                            <PersonIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]/40" fontSize="small" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your name"
                                                className="w-full pl-12 pr-4 py-4 bg-[#1B1B1B] border border-[#5B21B6]/20 rounded-xl text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300"
                                            />
                                        </div>
                                    </RevealOnScroll>
                                    <RevealOnScroll delay={450} direction="bottom">
                                        <div className="relative">
                                            <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]/40" fontSize="small" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Your email"
                                                className="w-full pl-12 pr-4 py-4 bg-[#1B1B1B] border border-[#5B21B6]/20 rounded-xl text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300"
                                            />
                                        </div>
                                    </RevealOnScroll>
                                </div>
                                <RevealOnScroll delay={500} direction="bottom">
                                    <div className="relative">
                                        <MessageIcon className="absolute left-4 top-4 text-[#FFFFFF]/40" fontSize="small" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Your message..."
                                            rows="5"
                                            className="w-full pl-12 pr-4 py-4 bg-[#1B1B1B] border border-[#5B21B6]/20 rounded-xl text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>
                                </RevealOnScroll>
                                <RevealOnScroll delay={550} direction="bottom">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#DAA520] to-[#8B5CF6] rounded-xl text-white font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <SendIcon fontSize="small" className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </RevealOnScroll>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

                {/* Séparateur amélioré avec effet de brillance */}
                <RevealOnScroll delay={250} direction="bottom">
                    <div className="relative my-8">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1B1B1B] rounded-full p-1 shadow-lg shadow-[#DAA520]/20">
                            {/* Logo utilisé comme point central du séparateur */}
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </footer>
    );
};

export default Footer;