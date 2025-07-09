import React from 'react'
import {Button} from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/app/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2> Get Interview Ready with AI-Powered Practice & Feedback</h2>
                    <p>Practice job interview with AI interviewer</p>
                    <Button asChild className="btn-primary">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>
                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                    <div className="interview-section flex flex-row gap-6 overflow-x-auto pb-4">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))}
                    </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                    <div className="interview-section flex flex-row gap-6 overflow-x-auto pb-4">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))}
                        {<p>No interviews yet</p>}
                    </div>
            </section>
        </>
    )
}
export default Page