import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Key, ExternalLink } from 'lucide-react';

interface MapboxTokenInputProps {
  onTokenSubmit: (token: string) => void;
  isLoading?: boolean;
}

const MapboxTokenInput: React.FC<MapboxTokenInputProps> = ({ onTokenSubmit, isLoading }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) {
      setError('Please enter your Mapbox access token');
      return;
    }
    if (!token.startsWith('pk.')) {
      setError('Mapbox public tokens should start with "pk."');
      return;
    }
    setError('');
    onTokenSubmit(token.trim());
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-xl border shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Key className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Mapbox Access Token Required</h3>
      </div>
      
      <Alert className="mb-4">
        <AlertDescription className="text-sm">
          To view the interactive map, please enter your Mapbox public access token. 
          You can get one for free at{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center"
          >
            mapbox.com <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJ..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="font-mono text-sm"
        />
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? 'Loading Map...' : 'Load Interactive Map'}
        </Button>
      </form>
      
      <div className="mt-4 text-xs text-muted-foreground">
        <p>• Your token is only stored locally in your browser</p>
        <p>• Mapbox offers 50,000 free map loads per month</p>
        <p>• Only use public tokens (starting with "pk.")</p>
      </div>
    </div>
  );
};

export default MapboxTokenInput;