import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET() {
  try {
    const API_KEY = 'AIzaSyDgACA4ZcxR00uJhIqrGsUYJvlHJS9LJgg';
    
    // Log API key for debugging
    console.log('Using API key directly:', API_KEY);
    
    // Initialize with hardcoded key
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Test with a very simple prompt
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Say hello world";
    
    console.log('Sending test request to Gemini API...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('Received response from Gemini API:', text);
    
    return NextResponse.json({ 
      success: true, 
      message: "Gemini API is working", 
      response: text 
    });
  } catch (error) {
    console.error('Error testing Gemini API:', error);
    return NextResponse.json({ 
      success: false, 
      error: String(error)
    }, { status: 500 });
  }
} 