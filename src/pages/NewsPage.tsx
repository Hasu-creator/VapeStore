import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component

const NewsPage = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Nhà khoa học gợi ý dùng thuốc lá điện tử để cai thuốc rất hiệu quả',
      date: '12/1/2021',
      description: 'Báo cáo của Tổ chức nghiên cứu ung thư Anh quốc cho thấy thuốc lá điện tử có thể tạo tác động đáng kể giúp bỏ thuốc lá điếu.',
      image: 'https://i.imgur.com/hsGPQ8f.png',
    },
  ];

  const PageStyle: CSSProperties = {
    width: '100%', 
    minHeight: '100vh',
    backgroundColor: 'rgba(255,255,255,1)', // Changed to fully opaque white
    position: 'relative',
    zIndex: 0
  };

  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    display: 'flex',
    gap: '30px',
    position: 'relative',
    zIndex: 1
  };

  const latestNews = [
    {
      id: 3,
      title: 'Những dấu mốc tốt đẹp đối với thuốc lá điện tử tại nơi công cộng',
      date: '20/1/2021',
      description: 'Mời bạn đọc cùng theo dõi bài viết này của chúng tôi và hãy cùng điểm lại một vài dấu mốc tốt đẹp của ngành thuốc lá điện tử trong quãng thời gian vừa qua.',
      image: 'https://i.imgur.com/o1f3DuC.png',
    },
    {
      id: 4,
      title: 'Mẹo làm sạch phổi bằng việc dùng nguyên liệu tự nhiên - Phần 1',
      date: '22/1/2021',
      description: 'Phổi là một cơ quan quan trọng trong cơ thể người, nó tác động rất lớn đến tình trạng sức khỏe của các bạn và làm cho cơ thể phụ thuộc nhiều vào nó. Hôm nay, chúng ta cũng sẽ cùng nhau nói đến các phương pháp làm sạch phổi sau hút thuốc để hạn chế những tác động không thể lường trước được với sức khỏe chính mình. Mời các bạn cùng theo dõi.',
      image: 'https://i.imgur.com/INU64F8.png',
    },
    {
      id: 5,
      title: 'An toàn sử dụng pin thuốc lá điện tử phần 4 – Định mức thật của pin thiết bị',
      date: '25/1/2021',
      description: 'Ở phần trước, chúng ta đã nói về các pin 18650 và cách để phân biệt các pin có định mức trên 30A thật và những chỉ số ảo. Ở phần bốn này, chúng ta hãy nói về định mức thực của pin thiết bị và liệu những pin có chỉ số ảo có thực sự an toàn không nhé.',
      image: 'https://i.imgur.com/ojmThFt.png',
    },
    {
      id: 6,
      title: 'Cắt giảm nhu cầu ăn vặt với việc sử dụng thuốc lá điện tử',
      date: '28/1/2021',
      description: 'Trong khi việc sử dụng thuốc lá điện tử hiện nay vẫn là một trong những cách hiệu quả nhất để giúp người nghiện hút thuốc lá truyền thống bỏ thuốc lá, thì cũng có lý do khiến cho mọi người tin rằng, thuốc lá điện tử cũng có thể giúp giảm thiểu việc ăn nhiều những loại đồ ngọt và các loại đồ ăn vặt khác.',
      image: 'https://i.imgur.com/im5wn4G.png',
    },
  ];

  const NewsCardStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f9f3f3', // Changed the background color here
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    padding: '20px'
  };

  const ImageStyle: CSSProperties = {
    width: '160px',
    height: '160 px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginRight: '20px'
  };

  return (
    <div style={PageStyle}>
      <div style={containerStyle}>
        {/* Cột bên trái */}
        <div style={{ flex: '2', width: '66%' }}>
          <Breadcrumb /> {/* Move the Breadcrumb component here */}
          <h2 style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#335D85',
            marginBottom: '20px'
          }}>
            Bài viết nổi bật
          </h2>

          {featuredNews.map((item) => (
            <div key={item.id} style={NewsCardStyle}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={ImageStyle} 
              />
              <div>
                <h3 style={{ 
                  fontFamily: 'JosefinSans, sans-serif',
                  fontSize: '1.2rem',
                  marginBottom: '10px'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#666',
                  marginBottom: '10px'
                }}>
                  Tin tức - {item.date}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: '#335D85'
            }}>
              Bài viết mới nhất
            </h2>
            <Link to="/Tin tức" style={{ 
              textDecoration: 'underline', 
              color: '#335D85' 
            }}>
              Xem thêm
            </Link>
          </div>

          {latestNews.map((item) => (
            <div key={item.id} style={NewsCardStyle}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={ImageStyle} 
              />
              <div>
                <h3 style={{ 
                  fontFamily: 'JosefinSans, sans-serif',
                  fontSize: '1.2rem',
                  marginBottom: '10px'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#666',
                  marginBottom: '10px'
                }}>
                  Tin tức - {item.date}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cột bên phải */}
        <div style={{ flex: '1', width: '33%' }}>

          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img 
              src="https://i.imgur.com/yfEbLTY.png" 
              alt="Sản phẩm"
              style={{
                width: '100%',
                borderRadius: '12px',
                marginBottom: '15px'
              }}
            />
            
            <h3 style={{
              fontFamily: 'JosefinSans, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              Thuốc Lá Điện Tử Pro Max
            </h3>
            
            <p style={{
              fontFamily: 'Roboto, sans-serif',
              color: '#666',
              marginBottom: '15px'
            }}>
              Trải nghiệm công nghệ mới, an toàn và hiệu quả
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#23A6F0'
              }}>
                599,000đ
              </span>
              
              <button style={{
                backgroundColor: '#23A6F0',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontFamily: 'JosefinSans, sans -serif',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;