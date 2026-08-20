import { Injectable } from '@angular/core';
import { SuccessStory } from '../../model/interfaces/SuccessStory.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {

  getStories() : SuccessStory[] {
    return [
      {
        id: 1,
        title: "From 10 Months of Unemployment to Senior Frontend Engineer",
        idea: "Overcoming post-graduation unemployment by building a public portfolio and leveraging networking to land a first tech job.",
        content: "After graduating with a Computer Science degree, I faced 10 exhausting months of job rejection letters. Feeling stuck, I stopped sending blind resumes and spent six weeks building three complex, full-stack applications. I shared my progress daily on LinkedIn and X. An engineering manager noticed my open-source showcase, invited me for a technical interview, and offered me my first Junior Developer position. Five years later, I'm now a Senior Frontend Engineer leading a team of six."
      },
      {
        id: 2,
        title: "Navigating Career Blockers: From Failed Internship to Cloud Architect",
        idea: "Turning a failed internship rejection into an opportunity to master specialized Cloud and DevOps skills.",
        content: "During my final university year, I was rejected by every major tech company for an internship. Distressed and doubting my path, I accepted a low-paying entry position at a small local IT shop. Instead of giving up, I used my free time to earn AWS and Kubernetes certifications. Recognizing my new expertise, the company promoted me to manage their cloud migration. That pivotal experience opened the door to my current role as a Principal Cloud Architect."
      },
      {
        id: 3,
        title: "Career Pivot at 32: From Hospitality to Backend Developer",
        idea: "Proving that non-traditional backgrounds can succeed in software engineering through self-taught discipline.",
        content: "I spent ten years working as a restaurant manager before deciding to learn Python and TypeScript late at night. The transition was overwhelming, and I hit major mental roadblocks dealing with complex algorithms. After completing a intensive coding bootcamp, recruiters dismissed me due to my lack of a CS degree. I finally landed a junior role after offering to build a free proof-of-concept tool during an interview. Today, I build high-throughput microservices as a core Backend Developer."
      },
      {
        id: 4,
        title: "Overcoming Imposter Syndrome: From Helpdesk Support to Cybersecurity Lead",
        idea: "Starting at entry-level IT support and overcoming self-doubt to build a high-impact cybersecurity career.",
        content: "I started my IT career answering phones at a basic helpdesk, feeling completely out of my depth whenever security incidents occurred. Battling severe imposter syndrome, I forced myself to study network security after hours and earned my Security+ certification. When a major ransomware attack hit our firm, I helped mitigate the damage using scripts I had written. That moment shifted my trajectory, leading directly to a promotion in the SOC team and eventually to my current position as Cybersecurity Lead."
      }
    ];
  }

}
