# Step 1: Build the Angular application

# Change the Path of build
# in angular.json change "outputPath": "dist/suryaprakash-portfolio-angular"

# Run the application
# docker build -t suryaprakash-portfolio .
# docker run -p 80:80 --name SuryaPrakash-Portfolio suryaprakash-portfolio

# Push
# docker tag suryaprakash-portfolio ariessurya/suryaprakash-portfolio:latest
# docker push ariessurya/suryaprakash-portfolio:latest

# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the built Angular application to Nginx's default static content directory
COPY dist/suryaprakash-portfolio-angular/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]