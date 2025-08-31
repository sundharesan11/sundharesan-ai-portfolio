import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import aiAbstract from '@/assets/ai-abstract.jpg';

const About = () => {
  const skills = [
    'Python', 'R', 'FastAPI', 'React', 'LangChain', 'Vertex AI', 
    'LLM', 'ETL Systems', 'PostgreSQL', 'DynamoDB', 'Weaviate',
    'Flask', 'TensorFlow', 'PyTorch', 'AWS', 'GCP', 'Docker'
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${aiAbstract})` }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in Generative AI, Data Science, and building real-world AI-driven products. 
                Passionate about AI for Healthcare, Fintech, and Scalable Architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Currently working as a Data Science Executive at New Street Tech, where I've spearheaded 
                conversational AI assistants, ETL-driven data lakes, and route optimization solutions that 
                directly impact business operations and growth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient">
                Contact Me
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                View LinkedIn
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={profilePhoto} 
                alt="Sundharesan - GenAI Engineer" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-glow"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;