# Signature Generator

A web application that generates customized email signatures based on predefined templates. Built as a monorepo (pnpm), Vue.js frontend with a Node.js backend, Redis for job queue management and Docker for orchestration.

## Getting Started

```bash
docker-compose up --build
```

## Application Structure

## Frontend Application
Available at `http://localhost:5173`
- Template gallery
- Template selection via modal (click on Template Card)
- Form-based signature customization
- Real-time signature preview


### Backend API
Available at `http://localhost:3000`

1. Get Available Templates
```http
GET /api/templates
```
Returns list of available signature templates


2. Generate Single Signature
```http
POST /api/signatures
```
```json
{
  "templateFileName": string,
  "templateData": {
    "fullName": string,
    "email": string,
    "phone": string,
    "logoUrl": string
  }
}

2. Bulk Generate Signatures
```http
POST /api/signatures/bulk
```
```json
{
  templateFileName: string;
  templateDataList: {
    fullName: string;
    email: string;
    phone: string;
    logoUrl: string;
  }[];
  webhookUrl: string;
}


## Future Improvements
The following features were considered in the initial design but were not implemented due to time constraints:

### Logo Upload
Current implementation accepts image URLs only. Future enhancement would include direct file uploads via:
  - Generating signed upload URLs
  - Cloud storage integration (e.g., AWS S3)
  - CDN delivery for optimized image serving

### Template Management
Migration of template metadata to a database solution to support:
  - Scalable template management
  - Pagination and infinite scroll
  - External template administration
  - Dynamic template updates

### System Robustness
- Enhanced error handling for asynchronous job processing
- Comprehensive logging system for failed operations
- Job status monitoring


### UI/UX Improvements
- Loaders while request
- Reusable form component architecture
- Enhanced field styling and validation
- Erorr handling