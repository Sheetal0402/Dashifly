import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface DashboardStats {
  totalUsers: number;
  revenue: number;
  conversionRate: number;
  activeProjects: number;
}

export interface Activity {
  id: string;
  type: 'user_signup' | 'payment' | 'project_created' | 'feature_used';
  description: string;
  timestamp: Date;
  user?: string;
  amount?: number;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private statsSubject = new BehaviorSubject<DashboardStats>({
    totalUsers: 2847,
    revenue: 94250,
    conversionRate: 3.2,
    activeProjects: 156
  });

  public stats$ = this.statsSubject.asObservable();

  constructor() {}

  getStats(): Observable<DashboardStats> {
    return this.stats$;
  }

  getRecentActivity(): Observable<Activity[]> {
    const activities: Activity[] = [
      {
        id: '1',
        type: 'user_signup',
        description: 'New user registration',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        user: 'Alice Johnson'
      },
      {
        id: '2',
        type: 'payment',
        description: 'Payment received',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        user: 'Bob Smith',
        amount: 99
      },
      {
        id: '3',
        type: 'project_created',
        description: 'New project created',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
        user: 'Carol Davis'
      },
      {
        id: '4',
        type: 'feature_used',
        description: 'Dashboard feature accessed',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
        user: 'David Wilson'
      },
      {
        id: '5',
        type: 'user_signup',
        description: 'New user registration',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
        user: 'Emma Brown'
      }
    ];
    return of(activities);
  }

  getFeatures(): Observable<Feature[]> {
    const features: Feature[] = [
      {
        id: '1',
        icon: 'dashboard',
        title: 'Advanced Analytics',
        description: 'Get detailed insights into your business performance with real-time analytics and custom reports.',
        category: 'analytics'
      },
      {
        id: '2',
        icon: 'security',
        title: 'Enterprise Security',
        description: 'Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.',
        category: 'security'
      },
      {
        id: '3',
        icon: 'integration_instructions',
        title: 'Easy Integrations',
        description: 'Connect with over 100+ tools and services through our robust API and pre-built integrations.',
        category: 'integrations'
      },
      {
        id: '4',
        icon: 'support_agent',
        title: '24/7 Support',
        description: 'Get help whenever you need it with our dedicated support team and comprehensive documentation.',
        category: 'support'
      },
      {
        id: '5',
        icon: 'speed',
        title: 'Lightning Fast',
        description: 'Built for performance with global CDN, optimized caching, and sub-second response times.',
        category: 'performance'
      },
      {
        id: '6',
        icon: 'mobile_friendly',
        title: 'Mobile Ready',
        description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
        category: 'mobile'
      }
    ];
    return of(features);
  }

  getTestimonials(): Observable<Testimonial[]> {
    const testimonials: Testimonial[] = [
      {
        id: '1',
        name: 'Sarah Chen',
        role: 'CEO',
        company: 'TechStart Inc.',
        avatar: 'https://i.pravatar.cc/150?img=2',
        quote: 'Dashify transformed how we track our business metrics. The insights are incredible and the interface is so intuitive.',
        rating: 5
      },
      {
        id: '2',
        name: 'Michael Rodriguez',
        role: 'Product Manager',
        company: 'Growth Labs',
        avatar: 'https://i.pravatar.cc/150?img=3',
        quote: 'The best dashboard solution we\'ve used. It integrates seamlessly with our existing tools and provides real value.',
        rating: 5
      },
      {
        id: '3',
        name: 'Emily Watson',
        role: 'Marketing Director',
        company: 'Digital First',
        avatar: 'https://i.pravatar.cc/150?img=4',
        quote: 'Our team productivity increased by 40% after implementing Dashify. The reporting features are outstanding.',
        rating: 5
      }
    ];
    return of(testimonials);
  }

  getPricingTiers(): Observable<PricingTier[]> {
    const tiers: PricingTier[] = [
      {
        id: 'starter',
        name: 'Starter',
        price: 29,
        period: 'month',
        description: 'Perfect for small teams getting started',
        features: [
          'Up to 5 team members',
          'Basic analytics',
          '10 integrations',
          'Email support',
          '5GB storage'
        ],
        buttonText: 'Start Free Trial'
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 79,
        period: 'month',
        description: 'Advanced features for growing businesses',
        features: [
          'Up to 25 team members',
          'Advanced analytics',
          'Unlimited integrations',
          'Priority support',
          '100GB storage',
          'Custom reports',
          'API access'
        ],
        popular: true,
        buttonText: 'Start Free Trial'
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 199,
        period: 'month',
        description: 'Complete solution for large organizations',
        features: [
          'Unlimited team members',
          'Enterprise analytics',
          'All integrations',
          '24/7 phone support',
          'Unlimited storage',
          'White-label options',
          'SSO & advanced security',
          'Dedicated account manager'
        ],
        buttonText: 'Contact Sales'
      }
    ];
    return of(tiers);
  }

  getFAQs(): Observable<Array<{question: string, answer: string}>> {
    const faqs = [
      {
        question: 'How do I get started with Dashify?',
        answer: 'Getting started is easy! Simply sign up for a free trial, and you\'ll have access to all features for 14 days. Our onboarding wizard will guide you through the setup process.'
      },
      {
        question: 'Can I integrate Dashify with my existing tools?',
        answer: 'Yes! Dashify supports over 100+ integrations including Slack, Google Workspace, Salesforce, HubSpot, and many more. You can also use our REST API for custom integrations.'
      },
      {
        question: 'Is my data secure with Dashify?',
        answer: 'Absolutely. We use bank-level encryption, comply with SOC 2 Type II standards, and offer features like SSO and two-factor authentication. Your data is stored in secure, geographically distributed data centers.'
      },
      {
        question: 'Can I change my plan anytime?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated based on your usage.'
      },
      {
        question: 'Do you offer customer support?',
        answer: 'We offer different levels of support based on your plan. All plans include email support, Professional plans get priority support, and Enterprise customers have access to 24/7 phone support and a dedicated account manager.'
      },
      {
        question: 'Is there a mobile app available?',
        answer: 'While we don\'t have a native mobile app yet, Dashify is fully responsive and works great on all mobile devices through your web browser. A mobile app is on our roadmap for 2024.'
      }
    ];
    return of(faqs);
  }
}