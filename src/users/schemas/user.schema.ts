import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Defining roles as a constant to prevent typos
export enum UserRole {
  ADMIN = 'admin',
  INSTRUCTOR = 'instructor',
  STUDENT = 'student',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string; 

  @Prop({ 
    type: String, 
    enum: UserRole, 
    default: UserRole.STUDENT 
  })
  role: UserRole;

  @Prop({ default: true })
  isActive: boolean;

  // Optional: For later progress tracking
  @Prop({ type: [String], default: [] })
  enrolledCourses: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);