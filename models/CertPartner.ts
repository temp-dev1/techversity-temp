import mongoose from 'mongoose';

const CertPartnerSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  logo: String,
});

export interface CertPartner {

  _id: number;
  name: string;
  logo: string;
}

export default mongoose.models.CertPartner || mongoose.model('CertPartner', CertPartnerSchema);     
