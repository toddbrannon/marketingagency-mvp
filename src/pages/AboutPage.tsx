import { Linkedin, Twitter } from 'lucide-react';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import CallToAction from '@/components/common/CallToAction';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/team';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Catalyst Creative, our mission, values, and the passionate team behind our marketing success stories."
      />
      
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                We're <span className="text-primary">Catalyst Creative</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A team of passionate marketers, creatives, and strategists dedicated to transforming brands and driving business growth.
              </p>
            </div>
            
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Catalyst Creative Team" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-primary/10 -z-10"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our Story" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <SectionHeading 
                title="Our Story" 
                subtitle="Founded in 2015, Catalyst Creative began with a simple mission: to help businesses reach their full potential through innovative marketing."
              />
              
              <div className="space-y-4 text-lg">
                <p>
                  What started as a small team of three passionate marketers has grown into a full-service agency with expertise across branding, digital marketing, content creation, and web development.
                </p>
                <p>
                  We believe that effective marketing is about more than just beautiful designs or clever campaigns—it's about creating meaningful connections between brands and their audiences that drive real business results.
                </p>
                <p>
                  Over the years, we've partnered with businesses of all sizes, from startups to Fortune 500 companies, helping them navigate the ever-changing marketing landscape and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <SectionHeading 
            title="Our Values" 
            subtitle="These core principles guide everything we do and define how we work with our clients."
            align="center"
            className="max-w-3xl mx-auto"
          />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Creativity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We approach every challenge with fresh thinking and innovative solutions that help our clients stand out in crowded markets.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We focus on delivering measurable outcomes and tangible business results, not just creative work that looks good.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We believe the best work happens when we partner closely with our clients, combining our expertise with their industry knowledge.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We operate with honesty and transparency in all our client relationships, building trust through ethical practices.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We embrace change and continuously evolve our approaches to stay ahead of industry trends and technological advancements.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We're committed to delivering exceptional quality in everything we do, from strategy development to creative execution.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The talented individuals behind our creative marketing solutions."
            align="center"
            className="max-w-3xl mx-auto"
          />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {member.socialLinks && (
                    <div className="flex space-x-2">
                      {member.socialLinks.linkedin && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </Button>
                      )}
                      {member.socialLinks.twitter && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Let's Work Together"
        description="Ready to transform your marketing strategy and achieve your business goals? Let's start a conversation about your needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        variant="centered"
      />
    </>
  );
};

export default AboutPage;