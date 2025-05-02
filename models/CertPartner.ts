import mongoose from 'mongoose';

const CertPartnerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  logo: String,
});

export interface CertPartner {

  id: number;
  name: string;
  logo: string;
}

export default mongoose.models.CertPartner || mongoose.model('CertPartner', CertPartnerSchema);
