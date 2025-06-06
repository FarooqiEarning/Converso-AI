interface StatusUpdate {
  id: string;
  date: string;
  time: string;
  message: string;
  type: 'positive' | 'negative' | 'neutral';
  models?: string[];
  apiType: 'stable' | 'beta';
}

export const statusUpdates: StatusUpdate[] = [
  {
    id: 'reactivation-1',
    date: 'Jun 6',
    time: '12:00 IST',
    message: 'Converso AI has been successfully reactivated with enhanced stability and performance improvements. All services are operational.',
    type: 'positive',
    models: ['core-system', 'api-service', 'web-interface'],
    apiType: 'stable'
  }
];
