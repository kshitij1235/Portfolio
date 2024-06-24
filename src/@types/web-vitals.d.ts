declare module 'web-vitals' {
    export interface ReportHandler {
      (metric: any): void;
    }
  
    export function getCLS(onReport: ReportHandler): void;
    export function getFID(onReport: ReportHandler): void;
    export function getFCP(onReport: ReportHandler): void;
    export function getLCP(onReport: ReportHandler): void;
    export function getTTFB(onReport: ReportHandler): void;
  }
  