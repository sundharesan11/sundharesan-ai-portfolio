import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  category: string[];
  whyBuilt: string;
  impact?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Conversational Agent for Relationship Managers',
      year: '2024',
      description: 'AI-powered assistant helping RMs perform daily operational tasks via conversational interface.',
      tags: ['Flask', 'DynamoDB', 'Weaviate', 'NLP', 'AWS'],
      category: ['LLM', 'AI', 'Product Management'],
      whyBuilt: 'Relationship Managers were overwhelmed with daily operational tasks and needed an intelligent assistant to streamline their workflow and improve efficiency.',
      impact: 'Reduced task completion time by 40% and improved RM productivity'
    },
    {
      id: '2',
      title: 'Configurable ETL-Driven Data Lake',
      year: '2024',
      description: 'Custom in-house Data Lake solution integrating data from multiple NST products.',
      tags: ['Python', 'PostgreSQL', 'ETL', 'REST APIs'],
      category: ['Analytics', 'Product Management'],
      whyBuilt: 'Multiple data silos across products created inefficiencies. Needed centralized data architecture for cross-product analytics and operational insights.',
      impact: 'Centralized data from 3 core products, enabling real-time analytics dashboard'
    },
    {
      id: '3',
      title: 'Customer Segmentation & Route Optimization',
      year: '2024',
      description: 'ML-based customer segmentation using geolocation data and route optimization for field operations.',
      tags: ['Python', 'DBSCAN', 'Google OR-Tools', 'Geospatial Analysis'],
      category: ['AI', 'Analytics', 'Automotive'],
      whyBuilt: 'Field operations lacked strategic planning for customer visits. RMs needed optimized routes to minimize travel time and maximize collection efficiency.',
      impact: 'Optimized daily visit sequences, reducing travel time by 30%'
    },
    {
      id: '4',
      title: 'PalletInsight - Real-time Pallet Detection',
      year: '2023',
      description: 'Computer vision prototype using RealSense D435i and YOLOv5 for industrial pallet analysis.',
      tags: ['YOLOv5', 'Computer Vision', 'RealSense', 'Roboflow'],
      category: ['AI', 'Side Project', 'Automotive'],
      whyBuilt: 'Industrial warehouses needed automated pallet detection for inventory management and quality control, eliminating manual inspection processes.',
      impact: 'Achieved real-time detection with distance and rotation measurements'
    },
    {
      id: '5',
      title: 'RentEase - Home Rent Prediction System',
      year: '2023',
      description: 'ML model predicting Indian home rent prices with 80% accuracy and web interface.',
      tags: ['Random Forest', 'Flask', 'HTML/CSS', 'Machine Learning'],
      category: ['AI', 'Side Project'],
      whyBuilt: 'House hunters and property owners lacked accurate rent prediction tools for the Indian market, leading to pricing inefficiencies.',
      impact: 'Achieved 80% accuracy in rent predictions with user-friendly web interface'
    },
    {
      id: '6',
      title: 'DigiSense - AI Digit Recognition',
      year: '2023',
      description: 'Web application for digit recognition using TensorFlow.js and interactive canvas.',
      tags: ['TensorFlow.js', 'Deep Learning', 'JavaScript', 'Canvas API'],
      category: ['AI', 'Side Project'],
      whyBuilt: 'Wanted to demonstrate machine learning capabilities in web browsers and create an interactive learning tool for digit recognition.',
      impact: 'Interactive web-based ML demonstration with real-time recognition'
    }
  ];

  const filters = ['All', 'LLM', 'Healthcare', 'RAG', 'Side Project', 'Mobility', 'Automotive', 'AI', 'NLP', 'Analytics', 'Low-Code', 'Product Management'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That Solved <span className="text-gradient">Real Problems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered assistants to data infrastructure, here are some solutions I've built to address real-world challenges.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-primary/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className={`card-glow bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{project.year}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Why I Built It</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.whyBuilt}
                    </p>
                  </div>
                  
                  {project.impact && (
                    <div>
                      <h4 className="font-semibold text-sm text-cyan-400 mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="outline" className="text-xs border-primary/30">
                      {cat}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4 border-primary/30 hover:bg-primary/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;