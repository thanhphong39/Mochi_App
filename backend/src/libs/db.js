import moogoose from 'mongoose';

export const connectDB = async () => {
  try {
    await moogoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log('Kết nối đến MongoDB thành công');
    } catch (error) {   
    console.error('Kết nối đến MongoDB thất bại', error);
    process.exit(1);
  }
};
