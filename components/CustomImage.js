import Link from 'next/link';
import Image from 'next/image';

export default function CustomImage({ href, src }) {
    return (
        <Link href={href}>
            <a>
                <div className="unsetImg">
                    <Image
                        src={src}
                        layout="fill"
                        className="customImg"
                        alt="Image"
                    />
                </div>
            </a>
        </Link>
    );
}
