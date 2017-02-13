'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.echo-sdk-ams.app.[amzn1.ask.skill.1291781f-c9af-4b99-ab3a-34e622ed1c80]";
var SKILL_NAME = 'Autism Fact';
/**
 * Array containing autism facts.
 */
var FACTS = [
"High-quality early intervention for autism can do more than improve behaviors, it can improve brain function ...",

"Being nonverbal at age 4 does NOT mean children with autism will never speak. Research shows that most will, in fact, learn to use words, and nearly half will learn to speak fluently...",  

"Though autism tends to be life long, some children with ASD make so much progress that they no longer meet the diagnostic criteria for autism. High quality early-intervention may be key... ",

"Many younger siblings of children with ASD have developmental delays and symptoms that fall short of an autism diagnosis, but still warrant early intervention... ",

"Research confirms what parents have been saying about wandering and bolting by children with autism: It’s common, it’s scary, and it doesn’t result from careless parenting... ",

"Prenatal folic acid, taken in the weeks before and after a woman becomes pregnant, may reduce the risk of autism... ",

"One of the best ways to promote social skills in grade-schoolers with autism is to teach their classmates how to befriend a person with developmental disabilities... ",

"Researchers can detect presymptom markers of autism as early as 6 months – a discovery that may lead to earlier intervention to improve outcomes... ",

"The first medicines for treating autism’s core symptoms are showing promise in early clinical trials... ",

"Investors and product developers will enthusiastically respond to a call to develop products and services to address the unmet needs of the autism community...  ",

"Autism now affects 1 in 68 children and 1 in 42 boys...",

"Autism prevalence figures are growing...",

"Autism is one of the fastest-growing developmental disorders in the U.S....",

"Autism costs a family $60,000 a year on average...",

"Boys are nearly five times more likely than girls to have autism...",

"There is no medical detection or cure for autism...",

"Autism is the fastest growing developmental disorder, yet most underfunded...",

"A 2008 Danish Study found that the mortality risk among those with autism was nearly twice that of the general population...",

"Children with autism do progress – early intervention is key...",

"Autism is treatable, not a hopeless condition...",

"Eugen Bleuler (1857-1939), a Swiss psychiatrist, first termed “autism” but applied it to adult schizophrenia. In 1943, the term was redefined by Leo Kanner (1894-1981) who dissociated autism from schizophrenia to create the modern understanding of the disorder...",

"Autism affects one in every 150 children born in the United States...",

"If one identical twin is diagnosed with autism, the other twin has about 90% chance of develop an autistic disorder...",

"Mutations on chromosome 16 have been tied to autism. The glitch is in a DNA region that contains “morpheus” genes, or genes which historically have changed very rapidly as humans evolved. In other words, the same method that helped evolve human intelligence may contribute to autism...",

"There is no blood test, no scan, and no image that can detect autism. Diagnosis relies on behavioral observation and screening...",

"Naughty Auties” is a virtual resource center for those with autism...",

"Environmental factors that could trigger predisposed genes to mutate and cause autism are vast and could include certain drugs, chemicals, heavy metal exposure, antibiotics, extensive television viewing, flame retardant, or infections during pregnancy...",

"A study suggests that counties with higher precipitation levels have higher autism rates...",

"A study from three states suggests that counties with higher precipitation levels have higher autism rates. Higher precipitation rates might carry more pollutants, decreased vitamin D levels, and increased television watching that could trigger autism...",

"Across a mere 10-year period—1993-2003—statistics from the U.S. Department of Education revealed a 657% increase in the nationwide rate of autism. Researchers debate whether autism rates are increasing or if broadening definitions of autism allow more people to be diagnosed...",

"Autism is more common than childhood cancer, diabetes, and AIDS combined...",

"Researchers have found that the area of the brain called the amygdala was on average 13% larger in young children with autism compared with children without autism...",

"More and more doctors and researchers are referring to autism as autisms, because each child’s case is different, as are each child’s causes and treatments...",

"In 1998, a theory emerged that the MMR vaccine caused autism. Specifically, the theory argued that the vaccine lingered in the gut, causing gastrointestinal problems which led to autism. This very small study was discredited and debunked. In fact, while the rate of MMR vaccinates has remained constant, the rate of autism diagnoses has continued to soar...",

"The Obama administration earmarked $211 million for autism research. The president also advocates universal screening for all infants for autism disorders, as well as rescreening for all 2-year-olds...",

"Approximately 67 million people worldwide are affected by autism...",

"Any child younger than 3 years of age with developmental delays qualifies to receive services through Early Intervention, a government-mandated program that provides services to eligible children. Services are free and may include speech and language instruction as well as occupational and physical therapy...",

"In 2008, several autistic children from different families were linked to a single sperm donor called Donor X...",

"Many scholars believe autism is a combination of genetic vulnerability that is triggered by some kind of social or toxic influence...",

"One in 10 extremely premature infants tested positive for autism. Children who are born more than three months early have double the expected rate of autism...",

"Other disabilities that fall within the Autism Spectrum category include Asperger’s syndrome, PDD-NOS (Pervasive Developmental Disorder - Not Otherwise Specified), Rett Syndrome, and Childhood Disintegrative Disorder...",

"Autism is the fastest growing disability in the United States...",

"As early as infancy, a baby can begin to show the three hallmark features of autism: communication challenges, impaired social interactions, and repetitive behavior...",

"Many children with autism have a reduced sensitivity to pain but may be extra sensitive to sound, touch, or other sensory stimulation—which may contribute to a reluctance to being cuddled or hugged...",

"Children with autism may experience coexisting conditions, such as fragile X-syndrome, epileptic seizures, tuberous sclerosis, Tourette syndrome, learning disabilities, and ADD...",

"Scientists are unclear as to why about 20% to 30% of autistic children develop epilepsy by the time they reach adulthood...",

"Girls with autistic symptoms may be suffering from Rett Syndrome. The syndrome affects mainly females, because male fetuses with the disorder rarely survive to term. Development is typical until 6-18 months, when language and motor milestones are lost...",

"Scientists suggest that people with autism may have abnormal levels of serotonin or other neurotransmitters in the brain, which may have resulted in the disruption of normal brain development early in fetal development...",

"Research suggests that having an older father may increase a child’s risk of autism. Children born to men 40 years old or older were almost six times more likely to have an autism spectrum disorder than those born to men younger than 30 years old. Maternal age seems to have little effect on autism risk...",

"Researchers recommend autistic testing if a baby doesn’t babble or coo by 12 months, doesn’t point or wave by 12 months, doesn’t say single words by 16 months, doesn’t say two-word phrases by 24 months, or loses previously acquired language or social skills at any age...",

"Chelation therapy, which removes mercury from the body, is a popular alternative treatment for autism, though it has not been proven to be a safe or effective treatment...",

"In families with one autistic child, the risk of having a second child with the disorder is approximately 5%, or one in 20. This is greater than the risk for the general population...",

"Some cases of autism may be associated with a family history of manic depression...",

"Children with Autism Spectrum Disorders (ASDs) are guaranteed free, appropriate public education under federal laws...",

"Though children with autism have higher rates of constipation and eating issues (such as repetitive eating), they do not have a higher incidence of gastrointestinal problems than other children, quelling a decade-long controversy...",

"Autism was initially called “Early Infantile Autism” or “Kanner’s Syndrome.”...",

"Autism was added as a special education in 1991 and now is the sixth most common classified disability in the U.S. autistic boy ... ",

"Boys are diagnosed with autism more than girls...",

"In the United States, one in 98 boys are diagnosed with autism, and 24,000 people are diagnosed with autism for the first time every year...",

"Researchers are unclear why boys are diagnosed with autism more than girls, but some think that the problem lies with the X chromosome, of which boys only have one...",

"Scholars and parents debate whether autism is a disability or whether it should be considered merely a different kind of personality...",

"Divorce rates are high in families with an autistic child. Researchers suggest reducing stress by ensuring an autistic child receives appropriate health care, setting aside time for a spouse, and creating a support system with other families of children with autism...",

"Mothers who have autoimmune diseases such as type1 diabetes, rheumatoid arthritis, and celiac disease have up to three times a greater risk for having a child with autism...",

"Children who are born underweight or premature may have a higher risk for autism...",

"From the Greek autos meaning “self,” autism literally means “alone.”...",

"According to the Journal of the American Association of Pediatrics, mothers of autistic children maintain remarkable strengths in creating parent-child relationships and social support...",

"Researchers have noted that infants who had early accelerated head growth were at risk for autism...",

"Dogs have been shown to improve autistic children’s quality of life, independence, and safety. The presence of a trained dog can reduce aggressive behavior, calm the child, and serve as a link to the child’s community..."

];

var a= Math.floor(Math.random() * FACTS.length);

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        var randomFact = FACTS[a];
        a=a+1;
        // Create speech output
        if(typeof randomFact=="undefined"){
            a=0;
            randomFact=FACTS[a];
            a=a+1;
        }
        var speechOutput = "Here's your fact: " + randomFact  + "Do you want more facts?" ;
        var reprompt = "Do you want more facts?";
        this.emit(':askWithCard', speechOutput,reprompt, SKILL_NAME, randomFact);
        
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a autism fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Otsimo is an education app for children who have autism syndrome. We are creating educational games and parent app. Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
