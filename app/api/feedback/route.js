import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'feedback.json');

// GET = read data
export async function GET() {
    const data = fs.readFileSync(filePath, 'utf-8');
    const feedback = JSON.parse(data);
    return NextResponse.json(feedback);

}


// POST = add new data
export async function POST(req) {
    const newFeedback = await req.json();
    const data = fs.readFileSync(filePath, 'utf-8');
    const feedbacks = JSON.parse(data);

    newFeedback.id = feedbacks.length + 1;
    feedbacks.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2));

    return NextResponse.json({ message: 'Feedback added!', feedback: newFeedback });

}