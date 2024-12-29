import React from "react";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { CompanyCarousel } from "@/components/organisms/company-carousel";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center py-5 text-white">
        <h1 className="text-6xl py-4">
          Welcome to{" "}
          <span className="text-primary">
            TalentTrove
            <img
              src="/public/images/talenttrove_logo.png"
              alt="talenttrove logo"
              className="h-10 w-10 inline-block"
            />
          </span>
        </h1>
        <p className="text-xl">
          Where opportunities meet talent. Your career starts here.
        </p>
      </section>
      <div className="text-center py-4 gap-4 text-white">
        <h2 className="py-2 text-xl">Start Your Journey Today!</h2>
        <div className="flex gap-4 justify-center py-2">
          <Link to="/joblistings">
            <Button variant="yellow" size="xlg">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-opening">
            <Button variant="purple" size="xlg">
              Post Jobs
            </Button>
          </Link>
        </div>
        <p className="py-2 text-lg">
          Whether you're looking to hire or get hired, JobConnect is here to
          make it happen.
        </p>
      </div>

      {/* carousel */}
      <CompanyCarousel />

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications and find the best talent.
          </CardContent>
        </Card>
      </section>

      {/* accordion faqs */}

      <div className="landing-page">
        <div className="landing-page-content">
          <section className="feature-section">
            <h2>Why Choose JobConnect?</h2>
            <ul>
              <li>🔍 Discover a wide range of job opportunities</li>
              <li>📢 Recruiters can find top talent easily</li>
              <li>💼 Seamless application process</li>
              <li>🌟 Build your network and grow your career</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
