import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { 
  BrainCircuit, 
  Settings, 
  Play, 
  Pause, 
  RefreshCcw, 
  Activity, 
  Shield, 
  Cpu,
  Zap,
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { SystemDiagram } from '@/src/components/ui/SystemDiagram';

const AGENTS = [
  {
    id: 1,
    name: 'Market Intelligence Agent',
    status: 'Active',
    task: 'Monitoring APAC semiconductor supply chain shifts',
    accuracy: '98.5%',
    uptime: '99.9%',
    type: 'Research'
  },
  {
    id: 2,
    name: 'Regulatory Compliance Bot',
    status: 'Idle',
    task: 'Scanning EU AI Act updates for financial services',
    accuracy: '99.2%',
    uptime: '100%',
    type: 'Compliance'
  },
  {
    id: 3,
    name: 'Strategic Scenario Simulator',
    status: 'Running',
    task: 'Simulating M&A impact on market share in retail',
    accuracy: '94.8%',
    uptime: '98.2%',
    type: 'Strategy'
  }
];

export default function AIAgents() {
  return (
    <div className="space-y-12 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text-main">AI Agents</h1>
          <p className="text-text-muted mt-1">Deploy and manage autonomous strategic intelligence agents.</p>
        </div>
        <Button className="h-10 px-6 bg-interaction-primary text-white border-none">
          Deploy New Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AGENTS.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-white border-border-light shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-interaction-primary/10 flex items-center justify-center border border-interaction-primary/20">
                    <BrainCircuit className="h-6 w-6 text-interaction-primary" />
                  </div>
                  <Badge variant="secondary" className={`text-[10px] uppercase tracking-wider px-2 py-0.5 border-none ${
                    agent.status === 'Active' || agent.status === 'Running' 
                      ? 'bg-alert-opportunity/10 text-alert-opportunity' 
                      : 'bg-gray-100 text-text-muted'
                  }`}>
                    {agent.status}
                  </Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-text-main mb-1">{agent.name}</h3>
                  <p className="text-xs text-text-muted">{agent.type} Agent</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 bg-secondary-bg rounded-lg border border-border-light">
                    <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-bold">Current Task</p>
                    <p className="text-xs text-text-main font-medium">{agent.task}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-bold">Accuracy</p>
                      <div className="flex items-center gap-1.5">
                        <Activity className="h-3 w-3 text-interaction-primary" />
                        <span className="text-sm font-bold text-text-main">{agent.accuracy}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-bold">Uptime</p>
                      <div className="flex items-center gap-1.5">
                        <Zap className="h-3 w-3 text-alert-opportunity" />
                        <span className="text-sm font-bold text-text-main">{agent.uptime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border-light">
                  <Button variant="secondary" className="flex-1 h-9 text-xs bg-white border-border-light">
                    <Settings className="mr-2 h-3 w-3" />
                    Configure
                  </Button>
                  <Button className="flex-1 h-9 text-xs bg-interaction-primary text-white border-none">
                    {agent.status === 'Idle' ? <Play className="mr-2 h-3 w-3" /> : <Pause className="mr-2 h-3 w-3" />}
                    {agent.status === 'Idle' ? 'Start' : 'Pause'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Automation Pipeline Visualization */}
      <Card className="bg-white border-border-light shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border-light bg-gray-50/50 p-5">
          <CardTitle className="text-lg flex items-center gap-2">
            <Workflow className="h-5 w-5 text-interaction-primary" />
            Automation Pipeline Visualization
          </CardTitle>
          <CardDescription>Real-time data flow through the Matrix360 automation engine.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <SystemDiagram type="automation-pipeline" className="border-none rounded-none aspect-video md:aspect-[21/9]" />
        </CardContent>
      </Card>

      {/* System Health Section */}
      <Card className="bg-white border-border-light shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cpu className="h-5 w-5 text-interaction-primary" />
            Agent System Health
          </CardTitle>
          <CardDescription>Real-time performance metrics for the Matrix360 AI infrastructure.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-secondary-bg rounded-xl border border-border-light">
              <p className="text-xs text-text-muted mb-1">Total Agents</p>
              <p className="text-2xl font-bold text-text-main">24</p>
            </div>
            <div className="p-4 bg-secondary-bg rounded-xl border border-border-light">
              <p className="text-xs text-text-muted mb-1">Active Tasks</p>
              <p className="text-2xl font-bold text-interaction-primary">18</p>
            </div>
            <div className="p-4 bg-secondary-bg rounded-xl border border-border-light">
              <p className="text-xs text-text-muted mb-1">System Load</p>
              <p className="text-2xl font-bold text-text-main">42%</p>
            </div>
            <div className="p-4 bg-secondary-bg rounded-xl border border-border-light">
              <p className="text-xs text-text-muted mb-1">Security Status</p>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-alert-opportunity" />
                <p className="text-lg font-bold text-alert-opportunity">Optimal</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
