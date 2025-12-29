import VideoFile from '../../images/file.mp4';
import Img1 from '../../images/img1.jpeg';
import Img2 from '../../images/img2.jpeg';
import Img3 from '../../images/img3.jpeg';

export default function ServicesPage() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-[#0a1a2f]" style={{ fontFamily: 'var(--font-heading)' }}>
                Toreo Data
              </h2>
              <p className="text-[#0a1a2f]/80 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Data connectors simplify the most complex data integration &amp; synchronization challenges facing the industry today. Toreo is known as the “art of bull fighting” and we’re doing just that with Toreo Data. Enabling connectivity between diverse platforms while not compromising on accuracy, efficiency and security are the mark of an accomplished data connector.
              </p>
              <p className="text-[#0a1a2f]/80" style={{ fontFamily: 'var(--font-body)' }}>
                The Toreo Data Connector is an ODBC driver that connects the data stored in an SAP BusinessObjects Universe with data visualization solutions like Microsoft Power BI, Qlik (QlikView &amp; Qlik Sense), Spotfire or Tableau. Experience seamless data synchronization with our high-quality Data Connector. We believe that your data should be accessible no matter what tools you choose at your company.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <video src={VideoFile} controls className="w-full max-w-lg rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Events section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#0a1a2f]" style={{ fontFamily: 'var(--font-heading)' }}>
            Events
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img src={Img1} alt="Campus Placement" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#0a1a2f]">Campus Placement Drive</h4>
                <p className="text-sm text-[#0a1a2f]/80 mt-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Conducted campus placements to recruit talented graduates and interns.
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img src={Img2} alt="Company Team" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#0a1a2f]">Company Team</h4>
                <p className="text-sm text-[#0a1a2f]/80 mt-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Our dedicated team working across engineering, product and delivery.
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img src={Img3} alt="CEO" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#0a1a2f]">Meet the CEO</h4>
                <p className="text-sm text-[#0a1a2f]/80 mt-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Insights from our CEO about the vision and strategy of MHK Tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
