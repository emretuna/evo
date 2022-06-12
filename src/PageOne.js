import { Button } from 'react-bootstrap/Button';
import React from 'react';

export function Header() {
    return (
        <div className='section-evolve'>
            <div className='wrapper-evolve'>
                <div className='parent-evolve-box'>
                    <h1>EVOLVE YOUR<br /> SALAGONS</h1>
                    <p>Evolution is a process in which 2 baby Solagons + $RAWR tokens (that you can get with <br /> staking) merge,
                and change into a Metagon.</p>
                <Button className="btn-evolve">Connect Wallet</Button>
                </div>
            </div>
        </div>
    )
}