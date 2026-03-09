import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { 
  MessageSquare, 
  Share2, 
  ThumbsUp, 
  MoreHorizontal, 
  Globe, 
  Lock, 
  TrendingUp, 
  AlertCircle,
  BrainCircuit,
  ArrowUpRight,
  Search
} from 'lucide-react';

const FEED_POSTS = [
  {
    id: 1,
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Regulatory Strategist',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    type: 'Insight',
    timestamp: '2h ago',
    content: 'The new EU AI Act implementation guidelines have just been released. Key takeaway for enterprise: focus on high-risk system classification and data governance audit trails. We are seeing a 40% increase in compliance overhead for non-prepared firms.',
    tags: ['AI Regulation', 'Compliance', 'EU Policy'],
    stats: { likes: 24, comments: 8, shares: 12 },
    isAI: false
  },
  {
    id: 2,
    author: {
      name: 'Matrix AI',
      role: 'Intelligence System',
      avatar: null
    },
    type: 'Intelligence Alert',
    timestamp: '4h ago',
    content: 'Market Signal Detected: Significant shift in APAC semiconductor supply chain routes. Predictive models suggest a 15% increase in lead times for high-end GPUs over the next quarter. Recommended Action: Diversify supplier base or front-load inventory.',
    tags: ['Supply Chain', 'Semiconductors', 'APAC'],
    stats: { likes: 45, comments: 15, shares: 30 },
    isAI: true
  },
  {
    id: 3,
    author: {
      name: 'Marcus Chen',
      role: 'APAC Expansion Lead',
      avatar: 'https://picsum.photos/seed/marcus/100/100'
    },
    type: 'Project Update',
    timestamp: '6h ago',
    content: 'Successfully completed the market entry strategy for a major fintech client in Vietnam. The local regulatory landscape is rapidly evolving, favoring decentralized finance solutions. Great collaboration with the local policy team.',
    tags: ['Market Entry', 'Fintech', 'Vietnam'],
    stats: { likes: 18, comments: 4, shares: 5 },
    isAI: false
  }
];

export default function Feed() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-12">
      {/* Feed Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-main">Strategic Intelligence Feed</h1>
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="h-9 px-4 text-xs bg-white border-border-light">
            All Updates
          </Button>
          <Button variant="secondary" className="h-9 px-4 text-xs bg-white border-border-light">
            AI Alerts
          </Button>
        </div>
      </div>

      {/* Post Creator Placeholder */}
      <Card className="bg-white border-border-light shadow-sm">
        <CardContent className="p-5">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0" />
            <div className="flex-1">
              <button className="w-full text-left px-4 py-2.5 rounded-full bg-secondary-bg text-text-muted text-sm border border-border-light hover:bg-gray-100 transition-colors">
                Share a strategic insight or intelligence alert...
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-interaction-primary transition-colors">
                <BrainCircuit className="h-4 w-4" />
                AI Analysis
              </button>
              <button className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-interaction-primary transition-colors">
                <Globe className="h-4 w-4" />
                Market Signal
              </button>
            </div>
            <Button className="h-8 px-4 text-xs bg-interaction-primary text-white border-none">
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="space-y-6">
        {FEED_POSTS.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-white border-border-light shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    {post.author.avatar ? (
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-12 h-12 rounded-xl object-cover border border-border-light"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-interaction-primary/10 flex items-center justify-center border border-interaction-primary/20">
                        <BrainCircuit className="h-6 w-6 text-interaction-primary" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-text-main text-sm">{post.author.name}</h3>
                        {post.isAI && (
                          <Badge className="bg-interaction-primary/10 text-interaction-primary border-none text-[10px] px-1.5 py-0">AI</Badge>
                        )}
                      </div>
                      <p className="text-xs text-text-muted">{post.author.role}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px] text-text-muted">{post.timestamp}</span>
                        <span className="text-[10px] text-text-muted">•</span>
                        <Globe className="h-2.5 w-2.5 text-text-muted" />
                      </div>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-secondary-bg rounded-lg transition-colors">
                    <MoreHorizontal className="h-5 w-5 text-text-muted" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-secondary-bg text-text-muted border-border-light text-[10px] px-2 py-0">
                      {post.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-interaction-primary hover:underline cursor-pointer">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-border-light">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-interaction-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      {post.stats.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-interaction-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      {post.stats.comments}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-interaction-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      {post.stats.shares}
                    </button>
                  </div>
                  <Button variant="ghost" className="h-8 px-2 text-xs text-interaction-primary hover:bg-interaction-primary/5">
                    View Analysis <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
